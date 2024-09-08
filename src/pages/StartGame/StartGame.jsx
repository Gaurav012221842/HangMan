import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame() {

    const navigate = useNavigate();

    function handleSubmit(value) {
        navigate('/play', { state: {wordSelected: value}});
    }

    return (
        <div>
            <h1 className="flex justify-center text[30px] text-green-600 font-extrabold mt-10">Start Game !!</h1>
            <TextInputFormContainer onSubmit={handleSubmit} />
        </div>
    );
}
export default StartGame;