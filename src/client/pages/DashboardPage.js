import SearchInput from '../components/SearchInput';
import React from 'react';
import {Card, Col, Table} from 'reactstrap';
import ax from 'axios';

class DashboardPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buscar: '',
      busqueda: [],
      buscando: false,
      error: {}
    };
    
    this.addValor = this.addValor.bind(this);
    this.buscar = this.buscar.bind(this);
  }

  componentDidMount() { // this is needed, because InfiniteCalendar forces window scroll
    //this.datos();
  }

  datos(){
    let este = this;
    este.setState({buscando:true});
    
    ax.post('http://localhost:3000/companies2', {buscar: this.state.buscar, limit: 10})
      .then(resp => {
        console.log(resp.data);
        este.setState({buscando:false});
      })
      .catch(err => {
        este.setState({ error: err });
        este.setState({buscando:false});
      });
  }

  addValor (event){
    this.setState({
      buscar:event.target.value
    });
  }

  buscar({key}){
    if(key === 'Enter'){
      this.datos();
    }
  }

  render() {
    const data = this.state;
    
    return (
      <div className="container" >
          <h2> Busca tu futuro</h2> 
          <div style={{paddingBottom:'8px', paddingTop:'8px'}}>
            <div className="d-flex flex-wrap" >
                <SearchInput
                  id="search"
                  placeholder="Search"
                  onPress={this.buscar}
                  changing={this.addValor}
                  disabled={data.buscando}
                ></SearchInput>
                <button className='btn btn-primary' disabled={data.buscando} onClick={e => this.datos()}>
                  {data.buscando?'Searching...':'Search'}
                </button>
            </div>
          </div>

          <Col sm={12} >
            <Card className="mb-3">
                <Table responsive className="table table-striped">
                  <thead>
                    <tr style={{fontSize:'10pt'}}>
                      <th scope="col">Rank</th>
                      <th scope="col">Company</th>
                      <th scope="col">Website</th>
                      <th scope="col">City</th>
                      <th scope="col">Category</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody >
                    { //desplegar busqueda
                      (data.busqueda.length!=0 ?
                        data.busqueda.map( (busqueda,index)=> 
                          <tr key={index} style={{fontSize:'10pt'}}>
                            <th scope="row">{busqueda.rank}</th>
                            <td>{busqueda.name}</td>
                            <td>{busqueda.website}</td>
                            <td>{busqueda.location_city}</td>
                            <td>{busqueda.categories}</td>
                            <td>{busqueda.description_1}</td>
                          </tr> 
                        )
                        : <tr>
                            <td colSpan="8" style={{color: 'red'}} align="center"> there isn´t companies </td>
                          </tr>)
                    }
                  </tbody>
                </Table>
              </Card>
            </Col>
        </div>
    );
  }
}
export default DashboardPage;
