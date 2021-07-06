
import React from "react";




const stylesBottom = {
    width:50,
    marginLeft: 700,
}
const styles = {
    width: 200,
    height:250
};
const styless ={
    marginLeft: 100,
    marginTop: 50,
};
function Books() {


    return (
        <div className="row mb-3">

            <div style={styless} className="col-md-10">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                    <div className="col p-4 d-flex flex-column position-static">

                        <strong className="d-inline-block mb-2 text-primary">Автор</strong>
                        <h3 className="mb-0">Название книги</h3>
                        <div className="mb-1 text-muted">Дата</div>
                        <p className="card-text mb-auto">Описание</p>
                        <a href="#" className="write">Читать</a>
                        <button style={stylesBottom} type="button" className="btn btn-primary btn-sm">Like</button>

                    </div>

                    <div className="col-auto d-none d-lg-block">

                        <img
                            src="http://pm1.narvii.com/7160/aefe1434328162cbacc31975958cb850de5fc44er1-1920-1200v2_uhq.jpg" style={styles}
                            ></img>
                    </div>
                </div>
            </div>

        </div>

    )}
export default Books;