const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Examen Final-Valeriano (no me jale profe :C).
                </p>
                <small className="text-secondary">
                    Desarrollado con React + Vite + Bootstrap
                </small>
            </div>
        </footer>
    );
};

export default Footer;