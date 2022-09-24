export const ErrorFallback = ({
    error,
    resetErrorBoundary,
  }) => {
    return (
      <div role="alert">
        <p>Something went wrong: {error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
};