function KerwinPromise(executor){
  this.status = "pending"
  this.result = undefined
  this.callbacks = []
  const _this = this
  function resolve(res) {
    if(_this.status !== "pending") return;
    _this.status = "fulfilled"
    _this.result = res
    _this.callbacks.forEach(cb => {
      cb.successCB && cb.successCB(_this.result);
    });
  }

  function reject(res) {
    if(_this.status !== "pending") return;
    _this.status = "rejected"
    _this.result = res
    _this.callbacks.forEach(cb => {
      cb.failCB && cb.failCB(_this.result);
    });
  }
  executor(resolve, reject);
}

KerwinPromise.prototype.then = function(successCB, failCB){
  if(!successCB) successCB = res => res
  if(!failCB) failCB = error => error
  return new KerwinPromise((resolve, reject)=>{
    if(this.status === "fulfilled"){
      var result = successCB && successCB(this.result);
      if(result instanceof KerwinPromise){
        result.then(res=>{
          resolve(res)
        },err=>{
          reject(err)
        })
      }else{
        resolve(result)
      }
    }else if (this.status === "rejected"){
      var result = failCB && failCB(this.result);
        if(result instanceof KerwinPromise){
          result.then(res=>{
            resolve(res)
          },err=>{
            reject(err)
          })
        }else{
          reject(result)
        }
    }else if(this.status === "pending") {
      // 收集回调
      this.callbacks.push({
        successCB:()=>{
          var result = successCB(this.result);
          if(result instanceof KerwinPromise){
            result.then(res=>{
              resolve(res)
            },err=>{
              reject(err)
            })
          }else{
            resolve(result)
          }
        },
        failCB:()=>{
          var result = failCB(this.result);
          if(result instanceof KerwinPromise){
            result.then(res=>{
              resolve(res)
            },err=>{
              reject(err)
            })
          }else{
            reject(result)
          }
        },
      })
    }
  })
}

KerwinPromise.prototype.catch = function (failCB) {
  this.then(undefined, failCB)
}
