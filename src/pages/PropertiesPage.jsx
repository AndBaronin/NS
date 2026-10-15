
import { Link, useParams } from 'react-router';
import { categories, properties, formatPrice } from '../data/properties';

function PropertiesPage() {
  const { categorySlug } = useParams();
  const category = categories.find((item) => item.slug === categorySlug);

  if (!category) {
    return (
      <main className="catalog-page">
        <div className="section-container">
          <p className="eyebrow">PROPERTIES</p>
          <h1>Category not found</h1>
          <Link className="text-link" to="/">
            Return to homepage ↗
          </Link>
        </div>
      </main>
    );
  }

  const categoryProperties = properties.filter((property) =>
    property.categorySlugs.includes(categorySlug),
  );

  return (
    <main className="catalog-page">
      <section className="catalog-heading section-container">
        <p className="eyebrow">EXPLORE CRETE</p>
        <h1>{category.title}</h1>
        <p>{category.description}</p>

        <nav className="catalog-categories" aria-label="Property categories">
          {categories.map((item) => (
            <Link
              key={item.slug}
              to={`/properties/${item.slug}`}
              className={
                item.slug === categorySlug
                  ? 'catalog-category active'
                  : 'catalog-category'
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <p className="catalog-count">
          {categoryProperties.length}{' '}
          {categoryProperties.length === 1 ? 'property' : 'properties'}
        </p>
      </section>

      <section className="section-container property-grid">
        {categoryProperties.map((property) => (
          <article className="property-card" key={property.id}>
            <Link
              className="property-card-image"
              to={`/property/${property.id}`}
              aria-label={`View ${property.title}`}
            >
              <img src={property.image} alt={property.title} />
              {property.categorySlugs.includes('selected') && (
                <span className="property-badge">Selected</span>
              )}
            </Link>

            <div className="property-card-content">
              <p className="property-location">{property.location}</p>
              <h2>
                <Link to={`/property/${property.id}`}>
                  {property.title}
                </Link>
              </h2>
              <p className="property-price">{formatPrice(property.price)}</p>

              <div className="property-specs">
                <span>{property.type}</span>
                {property.area && <span>{property.area} m²</span>}
                {property.bedrooms != null && (
                  <span>{property.bedrooms} bedrooms</span>
                )}
              </div>

              <Link
                className="property-card-link"
                to={`/property/${property.id}`}
              >
                View property <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default PropertiesPage;
