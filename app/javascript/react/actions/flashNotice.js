const FLASH_NOTICE = 'FLASH_NOTICE'

export { FLASH_NOTICE }

let flashNotice = notice => {
  return {
    type: FLASH_NOTICE,
    notice
  }
}

export { flashNotice }
