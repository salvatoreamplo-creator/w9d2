function WelcomeAllert(){
    return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         La migliore selezione di libri
        </Alert>
      ))}
    </>
  );
}
 export default WelcomeAllert