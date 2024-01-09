export default function CourseInfo() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Course subtitle
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "25%" }}>
              25%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
