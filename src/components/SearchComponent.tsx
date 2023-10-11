import { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useSearch from "../zustandStates/searchState";
import useGenreState from "../zustandStates/genreState";
import usePlatformState from "../zustandStates/platformState";
import useOrderBy from "../zustandStates/orderByState";

function SearchComponent() {
  const ref = useRef<HTMLInputElement>(null);
  const { setSearchWord } = useSearch();
  const { onClickingOnGenre } = useGenreState();
  const { onClickingOnPlatform } = usePlatformState();
  const { setOrderByValue } = useOrderBy();

  return (
    <>
      <Container className="my-2 ">
        <Row className="justify-content-end">
          <Col sm={6}>
            <Form
              className="d-flex container-fluid"
              onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) {
                  setSearchWord(ref.current.value);
                  onClickingOnPlatform(null,'All');
                  onClickingOnGenre(null);
                  setOrderByValue('','Relevance');
                }
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 container-fluid"
                aria-label="Search"
                ref={ref}
              />
              <Button
                type="submit"
                className="bg-dark btn btn-outline-dark text-white"
              >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchComponent;
