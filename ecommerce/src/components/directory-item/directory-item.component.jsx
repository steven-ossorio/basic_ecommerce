import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category: { id, title, imageUrl } }) => {
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body to={`/shop/${title}`}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
