export default function Error({
    children
}){
    return (
        <section id="catalog-page">
            <h1>Page not found!</h1>

            {children && <h3 className="no-articles">{children}</h3>}
        </section>
    );
}