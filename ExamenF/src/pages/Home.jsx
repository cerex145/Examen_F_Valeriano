import { Link } from 'react-router';

const HomePage = () => {
    return (
        <article className="py-5">
            <div className="container">
                <div className="text-center">
                    <h1 className="display-4 fw-bold">
                        Bienvenido a la Ghibili Studios APi
                    </h1>
                    <p className="lead text-muted">
                        Encuentra las mejores peliculas recomendadas por INg flacito
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center p-5">
                                <div className="text-primary">
                                    <i className="bi bi-people-fill" style={{ fontSize: '4rem' }}></i>
                                </div>
                                <h5 className="card-title fw-bold">Ver Pelis</h5>
                                <p className="card-text text-muted">
                                    Mejores pelis , da click!!!!!!!!!!!
                                </p>
                                <Link to="/entities" className="btn btn-primary btn-lg">
                                    <i className="bi bi-arrow-right-circle me-2"></i>
                                    Encontrar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center p-5">
                                <div className="text-success">
                                    <i className="bi bi-chat-dots-fill" style={{ fontSize: '4rem' }}></i>
                                </div>
                                <h5 className="card-title fw-bold">Contactanos</h5>
                                <p className="card-text text-muted">
                                    contactanos para mas imformacion
                                </p>
                                <Link to="/contact" className="btn btn-success btn-lg">
                                    <i className="bi bi-chat-left-text me-2"></i>
                                    Iniciar forms
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default HomePage;