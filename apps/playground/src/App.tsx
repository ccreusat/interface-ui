import { useState } from "react";
import "./App.css";
/* import {
  Lightning,
  Alarm,
  AppIndicator,
  Archive,
  ArrowBarDown,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  At,
  Bell,
  Bluetooth,
  Book,
  BookmarkPlus,
  Calendar,
  Camera,
  ChatDots,
  CheckCircle,
  CheckSquare,
  CloudDownload,
  Cloud,
  Compass,
  Cursor,
  Download,
  ExclamationCircle,
  ExclamationSquare,
  Eye,
  EyeSlash,
  Files,
  Flag,
  Gear,
  GeoAlt,
  Globe,
  Hand,
  Heart,
  Hourglass,
  House,
  Image,
  Inbox,
  Input,
  Key,
  Key2,
  List,
  ListUl,
  Lock,
  Login,
  Mail,
  Mic,
  Nut,
  Paperclip,
  Paperclip2,
  PencilSquare,
  Person,
  Play,
  Power,
  QuestionCircle,
  Scissors,
  Search,
  Share,
  Sliders,
  ToggleOff,
  ToggleOn,
  Star,
  Toggles,
  Trash,
  Wifi,
  XCircle,
  XSquare,
  ZoomIn,
  ZoomOut,
} from "@interface/ui"; */
/* import { Archive } from "@interface/ui/";
import { BellFill } from "@interface/ui/fill"; */
/* import {
  Lightning,
  Alarm,
  AppIndicator,
  Archive,
  ArrowBarDown,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  At,
  Bell,
  Bluetooth,
  Book,
  BookmarkPlus,
  Calendar,
  Camera,
  ChatDots,
  CheckCircle,
  CheckSquare,
  CloudDownload,
  Cloud,
  Compass,
  Cursor,
  Download,
  ExclamationCircle,
  ExclamationSquare,
  Eye,
  EyeSlash,
  Files,
  Flag,
  Gear,
  GeoAlt,
  Globe,
  Hand,
  Heart,
  Hourglass,
  House,
  Image,
  Inbox,
  Input,
  Key,
  Key2,
  List,
  ListUl,
  Lock,
  Login,
  Mail,
  Mic,
  Nut,
  Paperclip,
  Paperclip2,
  PencilSquare,
  Person,
  Play,
  Power,
  QuestionCircle,
  Scissors,
  Search,
  Share,
  Sliders,
  ToggleOff,
  ToggleOn,
  Star,
  Toggles,
  Trash,
  Wifi,
  XCircle,
  XSquare,
  ZoomIn,
  ZoomOut,
} from "@interface/ui/duotone"; */
import {
  Alarm,
  AppIndicator,
  Archive,
  ArrowBarDown,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  At,
  Bell,
  Bluetooth,
  Book,
  BookmarkPlus,
  Calendar,
  Camera,
  ChatDots,
  CheckCircle,
  CheckSquare,
  CloudDownload,
  Cloud,
  Compass,
  Cursor,
  Download,
  ExclamationCircle,
  ExclamationSquare,
  Eye,
  EyeSlash,
  Files,
  Flag,
  Gear,
  GeoAlt,
  Globe,
  Hand,
  Heart,
  Hourglass,
  House,
  Image,
  Inbox,
  Input,
  Key,
  Key2,
  Lightning,
  List,
  ListUl,
  Lock,
  Login,
  Mail,
  Mic,
  Nut,
  Paperclip,
  Paperclip2,
  PencilSquare,
  Person,
  Play,
  Power,
  QuestionCircle,
  Scissors,
  Search,
  Share,
  Sliders,
  ToggleOff,
  ToggleOn,
  Star,
  Toggles,
  Trash,
  Wifi,
  XCircle,
  XSquare,
  ZoomIn,
  ZoomOut,
} from "@interface-ui/react/duotone";

function App() {
  const [count, setCount] = useState(0);

  const icon = { width: "6rem", height: "6rem" };

  return (
    <div className="App">
      <div>
        <Alarm style={icon} className="yellow" />
        <AppIndicator style={icon} className="yellow" />
        <Archive style={icon} className="yellow" />
        <ArrowBarDown style={icon} className="yellow" />
        <ArrowDown style={icon} className="yellow" />
        <ArrowLeft style={icon} className="yellow" />
        <ArrowRight style={icon} className="yellow" />
        <ArrowUp style={icon} className="yellow" />
        <At style={icon} className="yellow" />
        <Bell style={icon} className="yellow" />
        <Bluetooth style={icon} className="yellow" />
        <Book style={icon} className="yellow" />
        <BookmarkPlus style={icon} className="yellow" />
        <Calendar style={icon} className="yellow" />
        <Camera style={icon} className="yellow" />
        <ChatDots style={icon} className="yellow" />
        <CheckCircle style={icon} className="yellow" />
        <CheckSquare style={icon} className="yellow" />
        <CloudDownload style={icon} className="yellow" />
        <Cloud style={icon} className="yellow" />
        <Compass style={icon} className="yellow" />
        <Cursor style={icon} className="yellow" />
        <Download style={icon} className="yellow" />
        <ExclamationCircle style={icon} className="yellow" />
        <ExclamationSquare style={icon} className="yellow" />
        <Eye style={icon} className="yellow" />
        <EyeSlash style={icon} className="yellow" />
        <Files style={icon} className="yellow" />
        <Flag style={icon} className="yellow" />
        <Gear style={icon} className="yellow" />
        <GeoAlt style={icon} className="yellow" />
        <Globe style={icon} className="yellow" />
        <Hand style={icon} className="yellow" />
        <Heart style={icon} className="yellow" />
        <Hourglass style={icon} className="yellow" />
        <House style={icon} className="yellow" />
        <Image style={icon} className="yellow" />
        <Inbox style={icon} className="yellow" />
        <Input style={icon} className="yellow" />
        <Key style={icon} className="yellow" />
        <Key2 style={icon} className="yellow" />
        <Lightning style={icon} className="yellow" />
        <List style={icon} className="yellow" />
        <ListUl style={icon} className="yellow" />
        <Lock style={icon} className="yellow" />
        <Login style={icon} className="yellow" />
        <Mail style={icon} className="yellow" />
        <Mic style={icon} className="yellow" />
        <Nut style={icon} className="yellow" />
        <Paperclip style={icon} className="yellow" />
        <Paperclip2 style={icon} className="yellow" />
        <PencilSquare style={icon} className="yellow" />
        <Person style={icon} className="yellow" />
        <Play style={icon} className="yellow" />
        <Power style={icon} className="yellow" />
        <QuestionCircle style={icon} className="yellow" />
        <Scissors style={icon} className="yellow" />
        <Search style={icon} className="yellow" />
        <Share style={icon} className="yellow" />
        <Sliders style={icon} className="yellow" />
        <Star style={icon} className="yellow" />
        <ToggleOff style={icon} className="yellow" />
        <ToggleOn style={icon} className="yellow" />
        <Toggles style={icon} className="yellow" />
        <Trash style={icon} className="yellow" />
        <Wifi style={icon} className="yellow" />
        <XCircle style={icon} className="yellow" />
        <XSquare style={icon} className="yellow" />
        <ZoomIn style={icon} className="yellow" />
        <ZoomOut style={icon} className="yellow" />
      </div>
    </div>
  );
}

export default App;
