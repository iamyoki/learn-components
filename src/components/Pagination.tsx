import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface PaginationProps {
  initialPage?: number
  totalPage?: number
  onChange?: (pageIndex: number) => void
}

const Pagination = ({
  initialPage = 1,
  totalPage = 10,
  onChange = undefined,
}: PaginationProps) => {
  const [page, setPage] = useState(initialPage)

  // 点击页面按钮
  function handleClickPage(index: number) {
    setPage(index)
    if (onChange) onChange(index)
  }

  // 当前索引是否active
  function isActive(i: number) {
    return {
      active: i + 1 === page,
    }
  }

  return (
    <div
      className="Pagination"
      css={css`
        display: flex;
      `}
    >
      <PaginationBtn disabled={page <= 1}>
        <MdChevronLeft />
      </PaginationBtn>
      {[...Array(totalPage)].map((item, i) => (
        <PaginationBtn
          // eslint-disable-next-line react/no-array-index-key
          key={i + 1}
          onClick={() => handleClickPage(i + 1)}
          {...isActive(i)}
        >
          {i + 1}
        </PaginationBtn>
      ))}
      <PaginationBtn disabled={page >= totalPage}>
        <MdChevronRight />
      </PaginationBtn>
    </div>
  )
}

interface PaginationBtnProps {
  active?: boolean
  disabled?: boolean
}

const PaginationBtn = styled.div<PaginationBtnProps>`
  background-color: white;
  color: slateblue;
  width: 30px;
  height: 30px;
  font-size: 14px;
  display: grid;
  place-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.2);
  margin: 4px;
  cursor: pointer;

  ${({ active }) =>
    active && {
      background: 'slateblue',
      color: 'white',
    }}

  ${({ disabled }) =>
    disabled && {
      background: 'whitesmoke',
      color: 'lightgray',
    }}
`

export default Pagination
