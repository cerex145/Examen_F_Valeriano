import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.email.includes('@')) {
            setError('Por favor completa los campos correctamente.');
            return;
        }

        setError('');
        setSuccess(true);
        console.log("Enviado:", formData);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2>Contacto</h2>
                {success ? (
                    <div className="alert alert-success">¡Mensaje enviado con éxito!</div>
                ) : (
                    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                )}
            </div>
        </div>
    );
};
export default Contact;