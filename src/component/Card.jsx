import React from 'react'

function Card() {
    return (
        <>
            <div class="card-deck h-64" style={{display:"flex" , justifyContent:"center", gap:"100px", marginTop:"4%", marginBottom: "10%" , flexWrap : "wrap"}}>
                <div class="card h-300" style={{    height: "fit-content"}} >
                    <img class="card-img-top " style={{height:"250px"}} src="https://images.unsplash.com/photo-1534531904504-65da6a62d34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpY3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card" style={{    height: "fit-content"}}>
                    <img class="card-img-top"style={{height:"250px"}} src="https://images.unsplash.com/photo-1534531904504-65da6a62d34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpY3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card" style={{    height: "fit-content"}}>
                    <img class="card-img-top" style={{height:"250px"}} src="https://images.unsplash.com/photo-1534531904504-65da6a62d34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpY3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card