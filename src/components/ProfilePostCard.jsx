import { useContext, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { AuthContext } from "./AuthProvider";
import UpdatePostModal from "./UpdatePostModal"

export default function ProfilePostCard({ post}) {
  const { content, id: postId, likes: postLikes = [], imageUrl } = post;
  const { currentUser, likePost, removeLikeFromPost, deletePost } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const [likes,setLikes] = useState(postLikes || [])
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const isLiked = likes.includes(userId);

  const pic = "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg";

  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleLike = () => {
    if (!userId) return;
    if (isLiked) {
      setLikes(likes.filter((id)=> id !== userId))
      removeLikeFromPost(userId, postId);
    } else {
      setLikes([...likes, userId])
      likePost(userId, postId);
    }
  };

  const handleDelete = ()=>{
    if(!userId) return;
    deletePost(userId,postId);
  }

  return (
    <Row
      className="p-3"
      style={{
        borderTop: "1px solid #D3D3D3",
        borderBottom: "1px solid #D3D3D3"
      }}
    >
      <Col sm={1}>
        <Image src={pic} fluid roundedCircle />
      </Col>

      <Col>
        <strong>Haris</strong>
        <span> @haris.samingan · Apr 16</span>
        <p>{content}</p>
        {imageUrl && <Image src={imageUrl} style={{width:150}}/>}
        <div className="d-flex justify-content-between">
          <Button variant="light">
            <i className="bi bi-chat"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-repeat"></i>
          </Button>
          <Button variant="light" onClick={handleLike}>
            {isLiked ? (
              <i className="bi bi-heart-fill text-danger"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
            {likes.length}
          </Button>
          <Button variant="light">
            <i className="bi bi-graph-up"></i>
          </Button>
          <Button variant="light" onClick={handleShowUpdateModal}>
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="light" onClick={handleDelete}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>

        <UpdatePostModal
          show={showUpdateModal}
          handleClose={handleCloseUpdateModal}
          postId={postId}
          originalPostContent={content}
        />
      </Col>
    </Row>
  );
}