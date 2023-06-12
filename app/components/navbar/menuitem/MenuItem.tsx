'use client';

import { IPropsUserMenu } from "./IProps.interface";



const MenuItem: React.FC<IPropsUserMenu> = ({ label, onClick }): JSX.Element => {
  return (
    <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      {label}
    </div>
  )
}

export default MenuItem