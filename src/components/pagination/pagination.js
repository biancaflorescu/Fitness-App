import "./pagination.css";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

const Pagination = (props) => {
  useEffect(() => {
    props.setCurrentPage(1);
  }, [props.bodyPart, props.targetMuscle, props.equipment]);

  const nextPage = (e) => {
    e.preventDefault();
    if (props.currentPage !== props.nPages) {
      props.setCurrentPage(props.currentPage + 1);
    } else if (props.currentPage === props.nPages) {
      props.setCurrentPage(1);
    }
  };
  const prevPage = (e) => {
    e.preventDefault();
    if (props.currentPage !== 1) {
      props.setCurrentPage(props.currentPage - 1);
    } else if (props.currentPage === 1) {
      props.setCurrentPage(props.nPages);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Button className="page-link" onClick={prevPage} variant="dark">
            {" "}
            &lt;&lt;{" "}
          </Button>
        </li>
        <li className="page-item pages">
          {props.currentPage} / {props.nPages}
        </li>
        <li className="page-item">
          <Button variant="dark" className="page-link" onClick={nextPage}>
            &gt;&gt;
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
