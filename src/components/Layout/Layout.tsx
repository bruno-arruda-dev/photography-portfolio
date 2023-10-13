import Head from 'next/head';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {

    return (
        <>
            <Head>
                <title>Fotografias Profissionais</title>
            </Head>


            {children}
            
        </>
    );
};

export default Layout;