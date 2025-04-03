import PropTypes from "prop-types";

interface StackProps {
    children: string;
    spacing: number;
    direction?: "row" | "column";
    wrap?: boolean;
}


function Stack({ children, spacing = 2, direction = "row", wrap = false }: StackProps) {
    const style: React.CSSProperties = {
        display: "flex",
        flexDirection: direction as React.CSSProperties["flexDirection"],
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
    };
    return <div style={style}>{children}</div>;
}

Stack.propTypes = {
    spacing: PropTypes.number,
    direction: PropTypes.oneOf(["row", "column"]),
    wrap: PropTypes.bool,
};

export default Stack;