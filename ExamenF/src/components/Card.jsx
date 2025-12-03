import { Link } from 'react-router';

const Card = ({ item }) => {
    return (
        <div className="card h-100 shadow-sm border-0 transition-hover">
            { }
            <div className="card-img-top p-3 d-flex align-items-center justify-content-center" style={{ height: '250px', background: '#f8f9fa' }}>
                <img
                    src={item.image}
                    alt={item.title}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
            </div>

            <div className="card-body d-flex flex-column">
                { }

                { }
                <h5 className="card-title text-truncate" title={item.title}>
                    {item.title}
                </h5>

                { }
                <p className="card-text fs-4 fw-bold text-primary mb-3">
                    ${item.producer}
                </p>

                { }
                <div className="mt-auto">
                    <button className="btn btn-outline-dark w-100">
                        <i className="bi bi-cart-plus me-2"></i>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;