import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Medusa Storefront</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;