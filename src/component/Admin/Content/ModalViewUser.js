import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalViewUser = ({ show, setShow, dataUser, resetUserData }) => {
  const handleClose = () => {
    setShow(false);
    resetUserData();
  };

  const imageSource = dataUser?.image
    ? `data:image/jpeg;base64,${dataUser.image}`
    : null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop="static"
      className="modal-add-user"
    >
      <Modal.Header closeButton>
        <Modal.Title>User details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">ID</label>
            <input
              className="form-control"
              value={dataUser?.id ?? ""}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              value={dataUser?.email ?? ""}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">User name</label>
            <input
              className="form-control"
              value={dataUser?.username ?? dataUser?.userName ?? ""}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Role</label>
            <input
              className="form-control"
              value={dataUser?.role ?? ""}
              disabled
            />
          </div>
          <div className="col-12">
            <label className="form-label">Avatar</label>
            <div className="img-preview">
              {imageSource ? (
                <img
                  src={imageSource}
                  alt={`Avatar of ${dataUser?.username ?? "user"}`}
                />
              ) : (
                <span>No avatar</span>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalViewUser;
