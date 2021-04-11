import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import useDidMountEffect from '../hooks/useDidMountEffect'

interface PaginationProps {
  initialPage?: number
  curPage?: number | null
  totalPage?: number
  onChange?: (pageIndex: number) => void
}

const Pagination = ({
  initialPage = 1,
  totalPage = 10,
  curPage = undefined,
  onChange = undefined,
}: PaginationProps) => {
  const [page, setPage] = useState(initialPage)

  useDidMountEffect(() => {
    if (onChange) onChange(page)
  }, [page])

  // 点击页面按钮
  function handleClickPage(index: number, isArrow?: boolean) {
    let curIndex
    if (isArrow) {
      curIndex = page + index
      setPage(curIndex)
    } else {
      curIndex = index
      setPage(curIndex)
    }
    // if (onChange) onChange(curIndex)
  }

  // 当前索引是否active
  function isActive(i: number) {
    return {
      active: i + 1 === (curPage ? +curPage : page),
    }
  }

  return (
    <div
      className="Pagination"
      css={css`
        display: flex;
      `}
    >
      <PaginationBtn
        disabled={page <= 1}
        onClick={() => handleClickPage(-1, true)}
      >
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
      <PaginationBtn
        disabled={page >= totalPage}
        onClick={() => handleClickPage(1, true)}
      >
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
