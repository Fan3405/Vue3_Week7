import{S as n}from"./sweetalert2.all-5cbc8e75.js";import{_ as T,r as v,o as i,c as r,d as x,a as e,F as g,e as I,t as c,b as d,w as A,h as E,v as P,i as b,j as O}from"./index-9f380a15.js";const{VITE_APP_URL:m,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Week7/",MODE:"production",DEV:!1,PROD:!0},F={data(){return{productId:"",cart:[],loadingItem:"",addCartLoading:null,data:{user:{email:"",name:"",tel:"",address:""},message:""},fullPage:!1}},methods:{getCarts(){const l=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel,loader:"dots",width:100,height:100,color:"gray"});this.$http.get(`${m}v2/api/${h}/cart`).then(t=>{this.cart=t.data.data,l.hide()}).catch(t=>{n.fire({title:t.response.data.message,icon:"error",confirmButtonText:"OK"}),l.hide()})},updateCartItem(l){const t={data:{product_id:l.product.id,qty:l.qty}};this.loadingItem=l.id,this.$http.put(`${m}v2/api/${h}/cart/${l.id}`,t).then(p=>{n.fire({title:p.data.message,icon:"success",confirmButtonText:"OK"}),this.getCarts(),this.loadingItem=""}).catch(p=>{n.fire({title:p.response.data.message,icon:"error",confirmButtonText:"OK"})})},deleteCartItem(l){this.loadingItem=l.id,this.$http.delete(`${m}v2/api/${h}/cart/${l.id}`).then(t=>{n.fire({title:t.data.message,icon:"success",confirmButtonText:"OK"}),this.getCarts(),this.loadingItem=""}).catch(t=>{n.fire({title:t.response.data.message,icon:"error",confirmButtonText:"OK"})})},deleteAllCarts(){this.$http.delete(`${m}v2/api/${h}/carts`).then(l=>{n.fire({title:l.data.message,icon:"success",confirmButtonText:"OK"}),this.getCarts()}).catch(l=>{n.fire({title:l.response.data.message,icon:"error",confirmButtonText:"OK"})})},onSubmit(){const{data:l}=this;this.$http.post(`${m}v2/api/${h}/order`,{data:l}).then(t=>{n.fire({title:t.data.message,icon:"success",color:"white",background:"url(https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1677768481152.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=msNPlyzL22mB0%2B11FdYXDfM5%2BtPzJKNOfRcAX2x6VUQwRgVMsNNolDvLdy34K5rzGpA%2FO0PH4g0Nw0KLQCZ%2FBZGtN1kscofbr%2F8rmel9eEuLAFBahiyGHwR02EJ7Cf8qGdZoHsjYzaR5PedfF13koGt4ptiDgg3XkrIrdXGUOHl9WRD3bb3nepb%2BkNauu9X8mG6O%2FgCYZ8ZCZJiAmRghrqGRGMfmToq68eu5DnvuRUayLVSlzIT75l3AWi8IphAK34R35PoW6ZsYlQiMsebbLEDu6M9YYI6mkcSu%2FE8yDATlX7xN5ooJZkQlCgrmOH0XOheN5y%2FnghjgOJBkxo7v7w%3D%3D)"}),this.$refs.form.resetForm(),this.data.message="",this.getCarts()}).catch(t=>{n.fire({title:t.response.data.message,icon:"error",confirmButtonText:"OK"})})}},mounted(){this.getCarts()}},w={class:"container"},D={class:"text-end"},R=["disabled"],U={class:"table align-middle"},K=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",{class:"text-end"},"單價"),e("th",{class:"text-success text-end"},"折扣價")])],-1),N=["onClick","disabled"],S={key:0,class:"spinner-border spinner-border-sm",role:"status"},q={key:1},L=e("div",{class:"text-success"},"已套用優惠券",-1),z={class:"input-group input-group-sm"},G=["onUpdate:modelValue","onChange","disabled"],M=["value"],Z={class:"text-end"},H={class:"text-end"},X=e("td",{colspan:"4",class:"text-end"},"總計",-1),Y={class:"text-end"},j=e("td",{colspan:"4",class:"text-end text-success"},"折扣價",-1),J={class:"text-end text-success"},Q={class:"my-5 row justify-content-center"},W={class:"mb-3"},$=e("label",{for:"email",class:"form-label"},"Email",-1),ee={class:"mb-3"},te=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),se={class:"mb-3"},ae=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),le={class:"mb-3"},oe=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ne={class:"mb-3"},de=e("label",{for:"message",class:"form-label"},"留言",-1),ie=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function re(l,t,p,ce,s,u){var C,V,y,k;const _=v("VueField"),f=v("ErrorMessage"),B=v("VueForm");return i(),r(g,null,[x(" 這是購物車頁面 "),e("div",w,[e("div",D,[e("button",{class:"btn btn-outline-danger",type:"button",onClick:t[0]||(t[0]=(...a)=>u.deleteAllCarts&&u.deleteAllCarts(...a)),disabled:!((V=(C=s.cart)==null?void 0:C.carts)!=null&&V.length)}," 清空購物車 ",8,R)]),e("table",U,[K,e("tbody",null,[(k=(y=s.cart)==null?void 0:y.carts)!=null&&k.length?(i(!0),r(g,{key:0},I(s.cart.carts,a=>(i(),r("tr",{key:a.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>u.deleteCartItem(a),disabled:a.id===s.loadingItem},[a.id===s.loadingItem?(i(),r("span",S)):(i(),r("span",q,"x"))],8,N)]),e("td",null,[x(c(a.product.title)+" ",1),L]),e("td",null,[e("div",z,[E(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":o=>a.qty=o,onChange:o=>u.updateCartItem(a),disabled:a.id===s.loadingItem},[(i(),r(g,null,I(30,o=>e("option",{value:o,key:o+"12345"},c(o),9,M)),64))],40,G),[[P,a.qty]])])]),e("td",Z,c(a.product.price),1),e("td",H,c(a.final_total),1)]))),128)):(i(),r(g,{key:1},[x(" 購物車目前是空的 ")],64))]),e("tfoot",null,[e("tr",null,[X,e("td",Y,c(s.cart.total),1)]),e("tr",null,[j,e("td",J,c(s.cart.final_total),1)])])]),e("div",Q,[d(B,{ref:"form",class:"col-md-6",onSubmit:u.onSubmit},{default:A(({errors:a})=>[e("div",W,[$,d(_,{id:"email",name:"Email",type:"email",class:b(["form-control",{"is-invalid":a.Email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:s.data.user.email,"onUpdate:modelValue":t[1]||(t[1]=o=>s.data.user.email=o)},null,8,["class","modelValue"]),d(f,{name:"Email",class:"invalid-feedback"})]),e("div",ee,[te,d(_,{id:"name",name:"姓名",type:"text",class:b(["form-control",{"is-invalid":a.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.data.user.name,"onUpdate:modelValue":t[2]||(t[2]=o=>s.data.user.name=o)},null,8,["class","modelValue"]),d(f,{name:"姓名",class:"invalid-feedback"})]),e("div",se,[ae,d(_,{id:"tel",name:"電話",type:"text",class:b(["form-control",{"is-invalid":a.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:s.data.user.tel,"onUpdate:modelValue":t[3]||(t[3]=o=>s.data.user.tel=o)},null,8,["class","modelValue"]),d(f,{name:"電話",class:"invalid-feedback"})]),e("div",le,[oe,d(_,{id:"address",name:"地址",type:"text",class:b(["form-control",{"is-invalid":a.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.data.user.address,"onUpdate:modelValue":t[4]||(t[4]=o=>s.data.user.address=o)},null,8,["class","modelValue"]),d(f,{name:"地址",class:"invalid-feedback"})]),e("div",ne,[de,E(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=o=>s.data.message=o)},null,512),[[O,s.data.message]])]),ie]),_:1},8,["onSubmit"])])])],64)}const he=T(F,[["render",re]]);export{he as default};
