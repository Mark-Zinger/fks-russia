import UserIcon from '@material-ui/icons/Group';
import UserCreate from './UserCreate';
// import PostEdit from './PostEdit';
import UserList from './UserList';
import UserEdit from './UserEdit'
import UserShow from './UserShow';

export default {
    name: 'users',
    list: UserList,
    create: UserCreate,
    edit: UserEdit,
    show: UserShow,
    icon: UserIcon,
};
