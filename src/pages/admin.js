import { GetServerSideProps } from "next";

/* 
This page redirects uses to the backend page, of prismic
*/

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "https://chris-dop-portfolio.prismic.io/",
      permanent: false,
    },
  };
}

function Admin() {
  return (
    <div>admin</div>
  )
}

export default Admin