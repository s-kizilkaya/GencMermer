import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IconPhoto } from "@tabler/icons-react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, sans-serif',
  },
  header: {
    backgroundColor: '#8b0020',
    color: 'white',
    padding: '16px 24px',
    textAlign: 'center',
    position: 'relative',
    '& h2': {
      margin: 0,
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
  content: {
    padding: '24px',
  },
  uploadArea: {
    border: '2px dashed #8b0020',
    borderRadius: '12px',
    padding: '2.5rem 1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    backgroundColor: 'rgba(139, 0, 32, 0.03)',
    '&:hover': {
      backgroundColor: 'rgba(139, 0, 32, 0.05)',
      borderColor: '#6b0019',
    },
  },
  uploadIcon: {
    fontSize: '2.5rem',
    color: '#8b0020',
    marginBottom: '1rem',
    opacity: 0.8,
  },
  previewContainer: {
    position: 'relative',
    margin: '1.5rem 0',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  previewImage: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    display: 'block',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
  },
  button: {
    minWidth: '140px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
  primaryButton: {
    backgroundColor: '#8b0020',
    color: 'white',
    '&:hover:not(:disabled)': {
      backgroundColor: '#6b0019',
      transform: 'translateY(-1px)',
    },
    '&:active:not(:disabled)': {
      transform: 'translateY(0)',
    },
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#8b0020',
    border: '1px solid #8b0020',
    '&:hover:not(:disabled)': {
      backgroundColor: 'rgba(139, 0, 32, 0.05)',
    },
  },
  resultCard: {
    marginTop: '2rem',
    textAlign: 'left',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  loading: {
    display: 'flex',
    margin: '2rem 0',
  },
  resultsContainer: {
    marginTop: "2rem",
    backgroundColor: 'rgba(139, 0, 32, 0.03)',
    borderRadius: '12px',
    padding: '20px',
    borderLeft: '4px solid #8b0020',
    borderRight: '4px solid #8b0020',
  },
  resultsHeader: {
    marginTop: 0, 
    color: '#8b0020', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px'
  },
  imageGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '12px',
  },
  suggestionCard: {
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    border: '1px solid #eee',
    padding: '12px',
    textAlign: 'center',
    width: 'calc(33.333% - 24px)',
    maxWidth: 220,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: 'none',
    },
  },
  suggestionImage: {
    width: '100%',
    height: 110,
    objectFit: 'cover',
    borderRadius: 6,
  },
  placeholderImage: {
    width: '100%',
    height: 110,
    background: '#f5f5f5',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
  },
  suggestionName: {
    fontWeight: 600,
    color: '#8b0020',
    fontSize: 12,
    marginTop: '8px',
    lineHeight: 1.2,
    wordBreak: 'break-word',
  },
  responseText: {
    whiteSpace: 'pre-line',
    color: '#444',
    fontSize: 14,
    marginTop: 24,
    textAlign: 'justify',
    lineHeight: 1.4,
    wordBreak: 'break-word',
  }
}));



export default function MarbleAISuggestion() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseResult, setResponseResult] = useState('');
  const [result, setResult] = useState('');
  const [marbleList, setMarbleList] = useState([]);
  const [parsedResults, setParsedResults] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch('/api/marbles')
      .then(res => res.json())
      .then(data => setMarbleList(data))
      .catch(() => setMarbleList([]));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult('');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);
    setResult('');

    try {
      const reader = new FileReader();
      
      const base64Image = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(image);
      });

    let marblePrompt = '';
    if (marbleList.length > 0) {
      marblePrompt = 'Elimizdeki mermer çeşitleri sadece şunlardır:\n';
      marblePrompt += marbleList.map(m => `- ${m.name} (${m.image})`).join('\n');
      marblePrompt += '\nSadece bu mermerlerden öneri yap.';
    }

    const prompt = `Aşağıdaki görsel bir oda, mekan veya pencere fotoğrafıdır. Görselin renk paleti, stil öğeleri ve genel estetik özelliklerine göre bu alana en uygun mermer çeşitlerini öner.

    ${marblePrompt}
    
    Cevabını şu formatta ver:
    
    1. Mermer Adı: [Mermerin adı]  
    - Uygun Olduğu Alanlar: [Örn. mutfak tezgahı, zemin, banyo, pencere pervazı]  
    - Neden Uygun: [Kısa açıklama – estetik, dayanıklılık, doku uyumu vb.]  
    - Renk Uyumu: [Mekandaki baskın renklerle uyumu]
    
    2. Mermer Adı: [Mermerin adı]  
    - Uygun Olduğu Alanlar: [...]  
    - Neden Uygun: [...]  
    - Renk Uyumu: [...]
    
    3. Mermer Adı: [Mermerin adı]  
    - Uygun Olduğu Alanlar: [...]  
    - Neden Uygun: [...]  
    - Renk Uyumu: [...]
    
    ⚠️ Görsel bir oda, iç mekan veya pencere fotoğrafı değilse, kullanıcıyı uygun bir görsel yüklemesi için bilgilendir.  
    ⚠️ Cevabında "elbette", "tabii ki" gibi ifadeler kullanma.`;

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;

    if (!apiKey) {
      throw new Error('API anahtarı bulunamadı. Lütfen .env.local dosyanızı kontrol edin.');
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt },
                  {
                    inline_data: {
                      mime_type: image.type,
                      data: base64Image,
                    },
                  },
                ],
              },
            ],
          }),
        }
      );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      setResult('Yapay Zeka şu anda meşgul. Lütfen daha sonra tekrar deneyin.');
      return;
    }

    const data = await response.json();

    if (!data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      setResult('Yapay Zeka şu anda meşgul. Lütfen daha sonra tekrar deneyin.');
      return;
    }

    const responseText = data.candidates[0].content.parts[0].text;
    setResponseResult(responseText);

    // Clean up the response text by removing markdown formatting
    const cleanedText = responseText
      .replace(/\*\*/g, '')  // Remove bold formatting
        .replace(/\*/g, '')     // Remove asterisks
        .replace(/\n\s*\n/g, '\n')  // Collapse multiple newlines
        .trim();

    // Extract mermer names using a more flexible pattern
    const matches = [...cleanedText.matchAll(/Mermer Adı:\s*([\w\d\-_]+)/gi)];

    const suggestions = matches.map(m => m[1]?.trim()).filter(Boolean);

    const parsed = suggestions.map(name => {
        const found = marbleList.find(m => m.name.toLowerCase() === name.toLowerCase());
        return found 
          ? { ...found, name: found.name } 
          : { name, image: null };
      });

    if (suggestions.length === 0) {
      setResult('Yapay Zeka şu anda meşgul. Lütfen daha sonra tekrar deneyin.');
      return;
    }

    setParsedResults(parsed);
    } catch (error) {
      console.error('Hata:', error);
      setResult('Yapay Zeka şu anda meşgul. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>Yapay Zeka ile Mermer Önerisi Alın</h2>
      </div>
      <div className={classes.content}>
        <div 
          className={classes.uploadArea}
          onClick={handleUploadClick}
        >
          <IconPhoto size={48} className={classes.uploadIcon} />
          <div style={{ marginBottom: '0.5rem', fontWeight: 500, color: '#333' }}>
            {preview ? 'Farklı Bir Resim Seçmek İçin Tıklayın' : 'Mekanınızın Fotoğrafını Yükleyin'}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            {preview ? `Seçilen Dosya: ${image.name}` : 'PNG veya JPG Formatında Yükleyin'}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        {preview && (
          <>
            <div className={classes.previewContainer} style={{ 
              maxHeight: '250px', 
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={preview} alt="Önizleme" className={classes.previewImage} style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            <div className={classes.buttonGroup}>
              <button
                className={`${classes.button} ${classes.primaryButton}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} style={{ color: 'white', marginRight: '8px' }} />
                    Düşünüyor...
                  </>
                ) : (
                  <>
                    Öneri Al
                  </>
                )}
              </button>
              <button
                className={`${classes.button} ${classes.secondaryButton}`}
                onClick={() => {
                  setImage(null);
                  setPreview('');
                  setResult('');
                }}
                disabled={loading}
              >
                Temizle
              </button>
            </div>
          </>
        )}
        {(parsedResults.length > 0 || result.length > 0) && (
          <div className={classes.resultsContainer}>
            <h3 className={classes.resultsHeader}>
              <span>Mermer Önerileri</span>
            </h3>
            <div className={classes.imageGrid}>
              {parsedResults.map((item, idx) => (
                <div key={idx} className={classes.suggestionCard}>
                  {item.image ? (
                    <img src={item.image} alt={item.name} className={classes.suggestionImage} />
                  ) : (
                    <div className={classes.placeholderImage}>Görsel Yok</div>
                  )}
                  <div className={classes.suggestionName}>{item.name}</div>
                </div>
              ))}
            </div>
            <div className={classes.responseText}>
              {responseResult ? responseResult.replaceAll("*", "") : result.replaceAll("*", "")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
