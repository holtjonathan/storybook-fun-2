import PropTypes from 'prop-types';

interface ButtonProps {
    label: string;
    backgroundColor?: string;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

function Button({ label, backgroundColor, size, onClick }: ButtonProps) {
    let scale = 1;
    if (size === "sm") scale = 0.75;
    else if (size === "lg") scale = 1.5;
    const style = {
        backgroundColor, 
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none"
    }
    return (
        <button style={style} onClick={onClick}>
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func,
}

export default Button;