import React, {Component} from 'react';
import ApiService from '../../ApiService'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

class AddProduct extends Component {
        constructor(props){
            super(props);

            this.state = {
                name: '',
                price: '',
                category_id: '',
                on_sale: '',
                on_discount: '',
                img_path: '',
                message: null,
            }
        }


        onChange = (e) =>{
            this.setState({
                [e.target.name] : e.target.value
            })
        }


        saveProduct = (e) =>{
            e.preventDefault();
            
            let product = {
                name: this.state.name,
                price: this.state.price,
                category_id: this.state.category_id,
                on_sale: this.state.on_sale,
                discount: this.state.discount,
                img_path: this.state.img_path,
            }
    
            ApiService.addProduct(product)
            .then( res => {
                this.setState({
                    message: product.name + "이 등록되었습니다."
                })
                alert("상품 등록 성공");
                document.location.href = "/add-product"
            })
            .catch(err => {
                alert("다시 기입해주세요.");
                console.log('saveUser() 에러', err);
            })
        }

        render(){

            return (
                <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    판매 상품 정보
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="상품 이름"
                        value={this.state.name}
                        onChange={this.onChange}
                        autoComplete="name"
                    />                    
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        id="price"
                        name="price"
                        label="가격(원)"
                        value={this.state.password}
                        onChange={this.onChange}
                        autoComplete="current-price"
                        />
                    </Grid>

                    <Grid item xs={12}>
                    <FormControl variant="outlined" style={{minWidth:200}}>
                        <InputLabel id="demo-simple-select-outlined-label">카테고리</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="category_id"
                        name="category_id"
                        value={this.state.category_id}
                        onChange={this.onChange}
                        label="category_id"
                        >
                        <MenuItem value="">
                            <em>--설정--</em>
                        </MenuItem>
                        <MenuItem value={11}>청</MenuItem>
                        <MenuItem value={12}>유기농</MenuItem>
                        <MenuItem value={13}>담금주</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="on_sale"
                        name="on_sale"
                        label="바로 판매"
                        value={this.state.on_sale}
                        onChange={this.onChange}
                        fullWidth
                        autoComplete="family-name"
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        required
                        id="on_discount"
                        name="on_discount"
                        label="할인률 적용"
                        value={this.state.on_discount}
                        onChange={this.onChange}
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        required
                        id="img_path"
                        name="img_path"
                        label="이미지 URL"
                        value={this.state.img_path}
                        onChange={this.onChange}
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.saveProduct}>등록</Button>
                
                </React.Fragment>
            );
        }
    }

    export default AddProduct;

