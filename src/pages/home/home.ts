import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { AppModule } from '../../app/app.module';
import { providerDef } from '@angular/core/src/view';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  createdcode = null;
  qrdata = null;
  scannedcode = null;
  
  constructor(public navCtrl: NavController,private qrScanner: QRScanner,private barcodescanner :BarcodeScanner) {
    
  }
 
generate()
{
  this.createdcode = this.qrdata;
}  
  
scan()
{
      this.barcodescanner.scan().then(barcodedata =>{
        this.scannedcode = barcodedata.text
      })
}
    
}


