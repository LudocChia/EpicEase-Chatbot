export default function createSvgIcon({ paths, fill = 'white', width = '16', height = '16', viewBox = '0 0 16 16' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={width} height={height} viewBox={viewBox}>
            {paths.map((path, index) => (
                <path
                    key={index}
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d={path}
                />
            ))}
        </svg>
    );
}