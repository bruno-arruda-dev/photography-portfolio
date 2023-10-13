import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout/Layout";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/NavbarMobile/NavbarMobile";

const index = () => {

    return (
        <Layout>

            <NavbarMobile />
            <Navbar />
            <Main />
            <Footer />
            
        </Layout>
    );
};

export default index;