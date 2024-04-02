import Avatar from './components/Avatar/Avatar';
import AvatarGroup from './components/Avatar/AvatarGroup';
import Badge from './components/Badge/Badge';
import BreadcrumbItem from './components/Breadcrumbs/BreadcrumbItem';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Button from './components/Button/Button';
import DatePicker from './components/Calendar/DatePicker';
import DateRangePicker from './components/Calendar/DateRangePicker';
import Checkbox from './components/Checkbox/Checkbox';
import ColorPicker from './components/ColorPicker/ColorPicker';
import AvatarDetailsLoader from './components/ContentLoader/AvatarDetailsLoader';
import AvatarNameLoader from './components/ContentLoader/AvatarNameLoader';
import BulletListLoader from './components/ContentLoader/BulletListLoader';
import ContentLoader from './components/ContentLoader/ContentLoader';
import FolderPathLoader from './components/ContentLoader/FolderPathLoader';
import ListWithImageLoader from './components/ContentLoader/ListWithImageLoader';
import PageDetailsLoader from './components/ContentLoader/PageDetailsLoader';
import TableLoader from './components/ContentLoader/TableLoader';
import CopyToClipboard from './components/CopyToClipboard/CopyToClipboard';
import Dropdown from './components/Dropdown/Dropdown';
import DropdownCheckboxItem from './components/Dropdown/DropdownCheckboxItem';
import DropdownGroup from './components/Dropdown/DropdownGroup';
import DropdownItem from './components/Dropdown/DropdownItem';
import Flag from './components/Flag/Flag';
import FieldGroup from './components/Form/FieldGroup';
import Input from './components/Form/Input';
import TextArea from './components/Form/TextArea';
import TextField from './components/Form/TextField';
import IconWrapper from './components/Icon/IconWrapper';
import InlineDialog from './components/InlineDialog/InlineDialog';
import Lozenge from './components/Lozenge/Lozenge';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import MenuSection from './components/Menu/MenuSection';
import Modal from './components/Modal/Modal';
import Popper from './components/Popper/Popper';
import Progress from './components/Progress/progress';
import ProgressBar from './components/ProgressBar/ProgressBar';
import RichTextEditor from './components/RichTextEditor/RichTextEditor';
import SectionMessage from './components/SectionMessage/SectionMessage';
import Select from './components/Select/Select';
import TreeSelect from './components/Select/TreeSelect/TreeSelect';
import UserPicker from './components/Select/UserPicker';
import Spinner from './components/Spinner/Spinner';
import CustomHint from './components/Spotlight/CustomHint';
import Spotlight from './components/Spotlight/Spotlight';
import SpotlightContext from './components/Spotlight/SpotlightContext';
import SpotlightOverlay from './components/Spotlight/SpotlightOverlay';
import Table from './components/Table/Table';
import { TabContainer, TabContent, TabHeader } from './components/Tabs';
import Tag from './components/Tag/Tag';
import LockSwitch from './components/Toggle/LockSwitch';
import Toggle from './components/Toggle/Toggle';
import Tooltip from './components/Tooltip/Tooltip';
import Tree from './components/Tree/Tree';
import InfiniteScroll from './components/common/InfiniteScroll';
import Popup from './components/common/Popup';
import PromisedContentLoader from './components/common/PromisedContentLoader';
import TransitionExpand from './components/common/TransitionExpand';
import CustomSingleSelectEditableRenderer from './components/field-renderers/CustomSingleSelectEditableRenderer';
import tooltip from './directives/tooltip';
//import '@atlaskit/css-reset/dist/bundle.css';

export * from './components/Icon';
export * from './components/field-renderers';

/*
export default {
    AvatarDetailsLoader,
    AvatarGroup,
    AvatarNameLoader,
    Badge, BreadcrumbItem,
    Breadcrumbs,
    BulletListLoader,
    Button,
    Checkbox,
    ColorPicker,
    ContentLoader,
    CopyToClipboard,
    CustomHint,
    CustomSingleSelectEditableRenderer,
    DatePicker,
    DateRangePicker,
    Dropdown,
    DropdownCheckboxItem,
    DropdownGroup,
    DropdownItem,
    FieldGroup,
    Flag,
    FolderPathLoader,
    IconWrapper,
    InfiniteScroll,
    InlineDialog,
    Input, ListWithImageLoader,
    LockSwitch,
    Lozenge,
    Menu,
    MenuItem,
    MenuSection,
    Modal,
    PageDetailsLoader,
    Popper,
    Popup,
    Progress,
    ProgressBar,
    PromisedContentLoader,
    RichTextEditor,
    SectionMessage,
    Select,
    Spinner,
    Spotlight,
    SpotlightContext,
    SpotlightOverlay,
    TabContainer,
    TabContent, TabHeader,
    Table,
    TableLoader,
    Tag,
    TextArea,
    TextField,
    Toggle,
    Tooltip,
    TransitionExpand,
    Tree,
    TreeSelect,
    UserPicker,
    tooltip
};
*/

export default Vue => {
    Vue.component(Avatar.name, Avatar)
    Vue.component(AvatarDetailsLoader.name, AvatarDetailsLoader)
    Vue.component(AvatarGroup.name, AvatarGroup)
    Vue.component(AvatarNameLoader.name, AvatarNameLoader)
    Vue.component(Badge.name, Badge)
    Vue.component(BreadcrumbItem.name, BreadcrumbItem)
    Vue.component(Breadcrumbs.name, Breadcrumbs)
    Vue.component(BulletListLoader.name, BulletListLoader)
    Vue.component(Button.name, Button)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(ColorPicker.name, ColorPicker)
    Vue.component(ContentLoader.name, ContentLoader)
    Vue.component(CopyToClipboard.name, CopyToClipboard)
    Vue.component(CustomHint.name, CustomHint)
    Vue.component(CustomSingleSelectEditableRenderer.name, CustomSingleSelectEditableRenderer)
    Vue.component(DatePicker.name, DatePicker)
    Vue.component(DateRangePicker.name, DateRangePicker)
    Vue.component(Dropdown.name, Dropdown)
    Vue.component(DropdownCheckboxItem.name, DropdownCheckboxItem)
    Vue.component(DropdownGroup.name, DropdownGroup)
    Vue.component(DropdownItem.name, DropdownItem)
    Vue.component(FieldGroup.name, FieldGroup)
    Vue.component(Flag.name, Flag)
    Vue.component(FolderPathLoader.name, FolderPathLoader)
    Vue.component(IconWrapper.name, IconWrapper)
    Vue.component(InfiniteScroll.name, InfiniteScroll)
    Vue.component(InlineDialog.name, InlineDialog)
    Vue.component(Input.name, Input)
    Vue.component(ListWithImageLoader.name, ListWithImageLoader)
    Vue.component(LockSwitch.name, LockSwitch)
    Vue.component(Lozenge.name, Lozenge)
    Vue.component(Menu.name, Menu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(MenuSection.name, MenuSection)
    Vue.component(Modal.name, Modal)
    Vue.component(PageDetailsLoader.name, PageDetailsLoader)
    Vue.component(Popper.name, Popper)
    Vue.component(Popup.name, Popup)
    Vue.component(Progress.name, Progress)
    Vue.component(ProgressBar.name, ProgressBar)
    Vue.component(PromisedContentLoader.name, PromisedContentLoader)
    Vue.component(RichTextEditor.name, RichTextEditor)
    Vue.component(SectionMessage.name, SectionMessage)
    Vue.component(Select.name, Select)
    Vue.component(Spinner.name, Spinner)
    Vue.component(Spotlight.name, Spotlight)
    Vue.component(SpotlightContext.name, SpotlightContext)
    Vue.component(SpotlightOverlay.name, SpotlightOverlay)
    Vue.component(TabContainer.name, TabContainer)
    Vue.component(TabContent.name, TabContent)
    Vue.component(TabHeader.name, TabHeader)
    Vue.component(Table.name, Table)
    Vue.component(TableLoader.name, TableLoader)
    Vue.component(Tag.name, Tag)
    Vue.component(TextArea.name, TextArea)
    Vue.component(TextField.name, TextField)
    Vue.component(Toggle.name, Toggle)
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(TransitionExpand.name, TransitionExpand)
    Vue.component(Tree.name, Tree)
    Vue.component(TreeSelect.name, TreeSelect)
    Vue.component(UserPicker.name, UserPicker)
    Vue.component(tooltip.name, tooltip)
};

