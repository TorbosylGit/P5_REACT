import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from '../components/ApartmentMain';

const Layout = ({ children }) => {
    return (
        <>
            <Main>
                <Navbar />
                <main>{children}</main>{' '}
                {/* Le contenu dynamique de chaque page */}
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
