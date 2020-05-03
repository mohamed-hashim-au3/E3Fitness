import React, { useState, useEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ChoosePlan(props) {
  const [lgShow, setLgShow] = useState(false);
  useEffect(() => {
    setLgShow(props.show);
  }, []);
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black" }}
        ></Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "black" }}
          className="choose-plan-container"
        >
          <div className="choose-plan-heading">
            <span className="heading-e3">E3</span> Fitness
          </div>
          <Table
            responsive
            borderless
            hover
            variant="dark"
            style={{ backgroundColor: "black" }}
            className="choose-plan-table"
          >
            <thead>
              <tr>
                <th></th>
                <th>Free</th>
                <th>
                  <div>Pay-PerView</div>
                  <div style={{ fontSize: "10px" }}>15$ per Video</div>
                </th>
                <th>
                  <div>Premium</div>
                  <div style={{ fontSize: "10px" }}>
                    20$ per Month(1 account)
                  </div>
                </th>
                <th>
                  <div>Premium Family</div>
                  <div style={{ fontSize: "10px" }}>
                    45$ per Month(Upto 4 accounts)
                  </div>
                </th>
                <th>
                  <div>Premium</div>
                  <div style={{ fontSize: "10px" }}>
                    10$ per Month(for 50 years and above)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Same Day Relase</td>
                <td>
                  <div>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <div style={{ fontSize: "9px" }}>( 72 hours after )</div>
                </td>
                <td>
                  {" "}
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>All Access Pass</td>
                <td>
                  <div>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <div style={{ fontSize: "9px" }}>( Only Selected Shows )</div>
                </td>
                <td>
                  {" "}
                  <FontAwesomeIcon icon={faTimes} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Casting</td>
                <td>
                  <div>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <div style={{ fontSize: "9px" }}>( Phone and PC only )</div>
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Full HD(1080p)</td>
                <td>
                  <div>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <div style={{ fontSize: "9px" }}>( 480p )</div>
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td>Interruptions</td>
                <td>
                  <div>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <div style={{ fontSize: "9px" }}>( With Ads )</div>
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCheck} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Free</td>
                <td>
                  <div> Upgrade Now !</div>
                  <div style={{ fontSize: "9px" }}>Premium Student</div>
                </td>
                <td>
                  <div> Upgrade Now !</div>
                  <div style={{ fontSize: "9px" }}>Premium Personal</div>
                </td>
                <td>
                  <div> Upgrade Now !</div>
                  <div style={{ fontSize: "9px" }}>Premium Family</div>
                </td>
                <td>
                  <div> Upgrade Now !</div>
                  <div style={{ fontSize: "9px" }}>Premium Family</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChoosePlan;
