import React from 'react'
import LinkIcon from '@material-ui/icons/Link';
import ReorderIcon from '@material-ui/icons/Reorder';
import BugReportIcon from '@material-ui/icons/BugReport';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ChatIcon from '@material-ui/icons/Chat';
import ShowChartIcon from '@material-ui/icons/ShowChart';


const color = { color: "primary" }

const findImage = image => {

    switch (image.trim().toLowerCase()) {
        case 'link':
            return <LinkIcon  {...color} />
        case 'stack':
            return <ReorderIcon  {...color} />
        case 'bug':
            return <BugReportIcon  {...color} />
        case 'play':
            return <PlayCircleFilledIcon  {...color} />
        case 'chat':
            return <ChatIcon  {...color} />
        case 'chart':
            return <ShowChartIcon {...color} />

        default:
            return
    }
}
export default findImage