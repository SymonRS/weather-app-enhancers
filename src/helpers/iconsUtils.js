import { FiPlusSquare } from 'react-icons/fi';

const iconByName = iconName => {
    return iconsNameMap[iconName];
}

const iconsNameMap = {
    'SquarePlus': FiPlusSquare
}

export default iconByName;