import { useState } from 'react'
import { MdCheck, MdClear } from 'react-icons/md'
import useDidMountEffect from '../hooks/useDidMountEffect'

interface SwitchProps {
  defaultValue?: boolean
  value?: boolean
  onChange?: (toggle: boolean) => void
  width?: number
  renderIcon?: React.ReactNode
}

const Switch = ({
  defaultValue,
  value,
  onChange,
  width = 200,
  renderIcon,
}: SwitchProps) => {
  const [toggle, setToggle] = useState(false)

  useDidMountEffect(() => {
    if (onChange) onChange(toggle)
  }, [toggle])

  function handleClick() {
    setToggle(!toggle)
  }

  return (
    <div
      className="Switch"
      style={{
        position: 'relative',
        width,
        height: width / 2,
        borderRadius: 999,
        transition: '.2s',
        background: toggle ? 'slateblue' : 'lavender',
        border: '1px solid slateblue',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}
      onClick={handleClick}
    >
      <div
        className="circle-wrapper"
        style={{
          width: width / 2 - 2,
          height: '100%',
          boxSizing: 'border-box',
          padding: width / 25,
          transition: '.2s',
          marginLeft: toggle ? '50%' : '0',
        }}
      >
        <div
          className="circle"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 999,
            background: 'white',
            border: '1px solid slateblue',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div
        className="icon-wrapper"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: width / 2 - 2,
          height: '100%',
          boxSizing: 'border-box',
          padding: width / 25,
          transition: '.2s',
          marginLeft: 0,
          color: 'white',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {toggle && !renderIcon && <MdCheck size={width / 8 + 8} />}
        {renderIcon}
      </div>
      <div
        className="icon-wrapper"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: width / 2 - 2,
          height: '100%',
          boxSizing: 'border-box',
          padding: width / 25,
          transition: '.2s',
          marginLeft: '50%',
          color: 'slateblue',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {!toggle && <MdClear size={width / 8 + 8} />}
      </div>
    </div>
  )
}

export default Switch
