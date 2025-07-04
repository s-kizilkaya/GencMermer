export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/Anasayfa",
      permanent: false,
    },
  };
}

export default function Index() {
  return null;
}
