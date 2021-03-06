import React from "react";
import {Pagination} from "react-bootstrap";
import "./style.scss";

interface Props {
    pageActive?: Number;
    lastPage?: Number;
    handleChangePage?: (page: any) => void;
}

export const PaginationItem = (props: Props) => {
    const {pageActive, lastPage, handleChangePage} = props;

    const changePage = (page: any) => {
        if (handleChangePage) {
            handleChangePage(page);
        }
    };
    return (
        <div className="pageItem">
            <Pagination>
                <Pagination.Prev
                    disabled={pageActive == 1}
                    onClick={() => {
                        changePage((pageActive as any) - 1);
                    }}
                />
                {(pageActive as any) >= (lastPage as any) - 1 &&
                (pageActive as any) != 1 ? (
                    <Pagination.Ellipsis/>
                ) : null}
                {(pageActive as any) - 1 > 1 ? <Pagination.Ellipsis/> : null}
                {(pageActive as any) === (lastPage as any) &&
                (lastPage as any) - 2 > 0 ? (
                    <Pagination.Item
                        onClick={() => {
                            changePage((pageActive as any) - 2);
                        }}
                    >
                        {pageActive ? (pageActive as any) - 2 : 0}
                    </Pagination.Item>
                ) : null}
                {(pageActive as any) > 1 ? (
                    <Pagination.Item
                        onClick={() => {
                            changePage((pageActive as any) - 1);
                        }}
                    >
                        {pageActive ? (pageActive as any) - 1 : 0}
                    </Pagination.Item>
                ) : null}
                <Pagination.Item active>{pageActive}</Pagination.Item>
                {(pageActive as any) < (lastPage as any) ? (
                    <Pagination.Item
                        onClick={() => {
                            changePage((pageActive as any) + 1);
                        }}
                    >
                        {(pageActive as any) + 1}
                    </Pagination.Item>
                ) : null}{" "}
                {(pageActive as any) == 1 &&
                (pageActive as any) + 2 <= (lastPage as any) ? (
                    <Pagination.Item
                        onClick={() => {
                            changePage((pageActive as any) + 2);
                        }}
                    >
                        {(pageActive as any) + 2}
                    </Pagination.Item>
                ) : null}{" "}
                {(pageActive as any) + 1 < (lastPage as any) ? (
                    <Pagination.Ellipsis/>
                ) : null}
                {(pageActive as any) + 3 < (lastPage as any) &&
                (pageActive as any) <= 2 ? (
                    <Pagination.Ellipsis/>
                ) : null}
                <Pagination.Next
                    disabled={pageActive == lastPage}
                    onClick={() => changePage((pageActive as any) + 1)}
                />
            </Pagination>
        </div>
    );
};
