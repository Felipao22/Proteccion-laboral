import React from "react";
import { Button, Pagination as AntdPagination } from "antd";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div>
      {currentPage > 1 && (
        <Button onClick={onPrevPage}>{"< Anterior"}</Button>
      )}
      <span>{`Página ${currentPage} de ${totalPages}`}</span>
      {currentPage < totalPages && (
        <Button onClick={onNextPage}>{"Siguiente >"}</Button>
      )}
    </div>
  );
};

const AntdCustomPagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage
}) => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignContent:"center", margin:"20px"}}> 
      <AntdPagination
        simple
        current={currentPage}
        total={totalPages * 10}
        onChange={(page) => {
          if (page > currentPage) {
            onNextPage();
          } else if (page < currentPage) {
            onPrevPage();
          }
        }}
      />
    </div>
  );
};



export default AntdCustomPagination;
