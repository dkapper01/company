import {Link} from 'part:@sanity/base/router'
import FolderIcon from 'part:@sanity/base/folder-icon'
import FileIcon from 'part:@sanity/base/file-icon'
import React from 'react'
import styles from './StructureMenuWidget.css'

function getIconComponent (item) {
  if (item.icon) return item.icon
  if (!item.schemaType) return FileIcon
  return item.schemaType.icon || FolderIcon
}

function StructureMenuWidget (props) {
  return (
    <div className=''>
      <div className=''>
        <h3 className=''>Edit your content</h3>
      </div>

      <div className=''>
        {props.structure.items.map(item => {
          const Icon = getIconComponent(item)
          return (
            <div key={item.id}>
              <Link className='' href={`/desk/${item.id}`}>
                <div className=''>
                  <Icon />
                </div>
                <div>{item.title}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StructureMenuWidget
