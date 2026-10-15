
import { Link, useParams } from 'react-router';
import { properties, formatPrice } from '../data/properties';

function PropertyPage() {
  const { propertyId } = useParams();
  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    return (
      <main className="catalog-page">
        <div className="section-container">
          <p className="eyebrow">PROPERTY DETAILS</p>
          <h1>Property not found</h1>
          <Link className="text-link" to="/">
            Return to homepage ↗
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="property-detail-page">
      <section className="section-container property-detail">
        <Link className="back-link" to={`/properties/${property.categorySlugs[0]}`}>
          ← Back to properties
        </Link>

        <div className="property-detail-heading">
          <div>
            <p className="eyebrow">{property.type.toUpperCase()} · CRETE</p>
            <h1>{property.title}</h1>
            <p className="property-location">{property.location}</p>
          </div>
          <p className="property-detail-price">{formatPrice(property.price)}</p>
        </div>

        <div className="property-detail-image">
          <img src={property.image} alt={property.title} />
        </div>

        <div className="property-detail-layout">
          <section className="property-description">
            <p className="eyebrow">ABOUT THIS PROPERTY</p>
            <h2>A closer look.</h2>
            <p>{property.description}</p>

            <h2>Features</h2>
            <ul className="property-features">
              {property.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <aside className="property-facts">
            <p className="eyebrow">PROPERTY DETAILS</p>
            <dl>
              <div>
                <dt>Property type</dt>
                <dd>{property.type}</dd>
              </div>
              {property.area && (
                <div>
                  <dt>Area</dt>
                  <dd>{property.area} m²</dd>
                </div>
              )}
              {property.bedrooms != null && (
                <div>
                  <dt>Bedrooms</dt>
                  <dd>{property.bedrooms}</dd>
                </div>
              )}
              {property.bathrooms != null && (
                <div>
                  <dt>Bathrooms</dt>
                  <dd>{property.bathrooms}</dd>
                </div>
              )}
              <div>
                <dt>Location</dt>
                <dd>{property.location}</dd>
              </div>
            </dl>

            <Link className="primary-button property-enquire" to="/#contacts">
              Enquire about this property <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default PropertyPage;
