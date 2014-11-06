var expect = require('chai').expect ,
    LinkedList = require('../src/ds_linked_list') ,
    util = require('util');

//console.log( util.inspect( LinkedList('hola') , {showHidden: true, depth: null, colors: true} ) );

describe( 'LinkedList' , function () {
    var linkedList;
 
    before(function () {
        linkedList = new LinkedList();
    });
 
    describe( 'constructor' , function() {
        it( 'should have properties' , function () {
            expect( linkedList ).to.have.property( 'size' );
            expect( linkedList ).to.have.property( 'uh oh' );
        });
    });
});



//var assert = require('assert');
//
//describe('Array', function(){
//    describe('#indexOf()', function(){
//        it('should return -1 when the value is not present', function(){
//            assert.equal(-1, [1,2,3].indexOf(5));
//            assert.equal(-1, [1,2,3].indexOf(0));
//            })
//    })
//})
