import { useEffect } from 'react';

import { useFilmsStore } from '../store/Store';
import CardList from '../components/Cardlist';

const Entities = () => {

    const {
        films,
        fetchFilms,
        isLoading,
        error,
        currentPage,
        totalPages
    } = useFilmsStore();


    useEffect(() => {
        fetchFilms(currentPage);
    }, [fetchFilms, currentPage]);

    return (
        <div className="container py-5">
            { }
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Catálogo de Peliculas</h1>
                <p className="lead text-muted">Explora nuestra colección exclusiva (APi)</p>
            </div>

            { }
            {isLoading && (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            )}

            { }
            {error && (
                <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            )}

            { }
            {!isLoading && !error && films.length > 0 && (
                <>
                    <CardList items={films} />

                    { }
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                        <button
                            className="btn btn-primary"
                            disabled={currentPage === 1}
                            onClick={() => fetchFilms(currentPage - 1)}
                        >
                            <i className="bi bi-chevron-left me-1"></i>
                            Anterior
                        </button>

                        <span className="fw-bold px-3">
                            Página {currentPage} de {totalPages}
                        </span>

                        <button
                            className="btn btn-primary"
                            disabled={currentPage === totalPages}
                            onClick={() => fetchFilms(currentPage + 1)}
                        >
                            Siguiente
                            <i className="bi bi-chevron-right ms-1"></i>
                        </button>
                    </div>
                </>
            )}

            { }
            {!isLoading && !error && films.length === 0 && (
                <div className="alert alert-warning text-center">
                    No se encontraron productos.
                </div>
            )}
        </div>
    );
};

export default Entities;