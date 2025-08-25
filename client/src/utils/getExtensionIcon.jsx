import {  DocIcon,  ExcelIcon, ImageIcon, PdfIcon } from "../components/icons/Icons";
import { FileOutlined } from "@ant-design/icons";
  
  
  // Función para obtener el ícono correspondiente según la extensión del archivo
  export const getExtensionIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    switch (extension) {
      case "docx":
        return <DocIcon style={{ marginRight: "5px", marginBottom:"5px" }} />;
      case "pdf":
        return <PdfIcon style={{ marginRight: "5px", marginBottom:"5px" }} />;
      case "doc":
          return <DocIcon style={{ marginRight: "5px", marginBottom:"5px" }} />;
      case "xls":
        return <ExcelIcon style={{ marginRight: "5px", marginBottom:"5px" }} />;
        case "xlsx":
          return <ExcelIcon style={{ marginRight: "5px", marginBottom:"5px" }} />;
      case "jpg":
        return <ImageIcon style={{ marginRight: "5px", marginBottom:"5px" }} />;
      case "jpeg":
        return <ImageIcon  style={{ marginRight: "5px", marginBottom:"5px" }} />;
      default:
        return <FileOutlined style={{ marginRight: "5px", marginBottom:"5px" }} />;
    }
  };