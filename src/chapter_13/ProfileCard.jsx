import Card from "./Card";

function ProfileCard(props){
    return (
        <Card title = "Leo Ryu" backgroundColor="#4ea04e">
            <p>안녕하세요 Leo 입니다.</p>
            <p>저는 리액트를 사용하여 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;