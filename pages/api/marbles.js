import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const kartelaPath = path.join(process.cwd(), 'public', 'img', 'kartela');
  const marbleTypes = fs.readdirSync(kartelaPath).filter((dir) => {
    return fs.statSync(path.join(kartelaPath, dir)).isDirectory();
  });
  let marbles = [];

  marbleTypes.forEach((type) => {
    const typePath = path.join(kartelaPath, type);
    const files = fs.readdirSync(typePath).filter((file) => file.match(/\.(jpg|jpeg|png)$/i));
    files.forEach((file) => {
      marbles.push({
        name: path.parse(file).name,
        type,
        image: `/img/kartela/${type}/${file}`,
      });
    });
  });

  res.status(200).json(marbles);
}
