export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/Anasayfa",
      permanent: true,
    },
  };
}

export default function Index() {
  return null;
}
