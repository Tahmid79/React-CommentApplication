import React from 'react' ;
import ReactDOM from 'react-dom' ;
import faker from 'faker' ;


import CommentDetail from './CommentDetail' ;
import ApprovalCard from './ApprovalCard' ;

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
               <div>
                   <h4>Warning</h4>
                Are you sure you want to do this
               </div>
            </ApprovalCard>


            <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 6:00PM"
                content="Cool"
                avatar = {faker.image.avatar()} />
           </ApprovalCard>

            <ApprovalCard>
            <CommentDetail
                author="Peter"
                timeAgo="Today at 3:40PM"
                content="Nice"
                avatar = {faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail
                author="John"
                timeAgo="Today at 3:45PM"
                content = "Interesting"
                avatar = {faker.image.avatar()}  />
            </ApprovalCard>
        </div>

    ) ;

};

ReactDOM.render(
    <App/> ,
    document.querySelector("#root")
) ;