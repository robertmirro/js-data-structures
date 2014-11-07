var expect = require('chai').expect ,
    LinkedList = require('../src/ds_linked_list') ,
    util = require('util') ,
    linkedList;

//console.log( util.inspect( LinkedList('hola') , {showHidden: true, depth: null, colors: true} ) );

describe( 'LinkedList' , function () {

    describe( 'factory constructor' , function () {
        it( 'should be a function with 2 params' , function () {
            expect( LinkedList ).to.be.a( 'function' );
            expect( LinkedList ).to.have.length( 2 );
        });
    });
        
    describe( 'empty linked list' , function() {
        beforeEach( function () {
            linkedList = new LinkedList();
        });
        
        it( 'should be an object representing an empty list' , function () {
            expect( linkedList ).to.be.an( 'object' );
            expect( linkedList ).to.have.property( 'size' , 0 );
            expect( linkedList ).to.have.property( 'isEmpty' , true );
            expect( linkedList.first() ).to.equal( null );
            expect( linkedList.last() ).to.equal( null );
            expect( linkedList.current() ).to.equal( null );
            expect( linkedList.next() ).to.equal( null );
            expect( linkedList.get( 'some value' ) ).to.equal( null );
            expect( linkedList.getAt( 0 ) ).to.equal( null );
            expect( linkedList.toArray() ).to.eql( [] );
        });

//    'size'          : { 'get'   : size , 'enumerable' : true , 'configurable' : false } ,
//    'isEmpty'       : { 'get'   : isEmpty , 'enumerable' : true , 'configurable' : false } ,
//    'empty'         : { 'value' : empty , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'first'         : { 'value' : first , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'last'          : { 'value' : last , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'current'       : { 'value' : current , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'next'          : { 'value' : next , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'get'           : { 'value' : get , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'getAt'         : { 'value' : getAt , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'add'           : { 'value' : addFirst , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'addLast'       : { 'value' : addLast , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'addAt'         : { 'value' : addAt , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'remove'        : { 'value' : remove , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'removeAt'      : { 'value' : removeAt , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'removeCurrent' : { 'value' : removeCurrent , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'toArray'       : { 'value' : toArray , 'enumerable' : true , 'configurable' : false , 'writable' : false } ,
//    'forEach'       : { 'value' : forEachNode , 'enumerable' : true , 'configurable' : false , 'writable' : false }
        
        
        it( 'manually add single item, should be an object with a single list item' , function () {
            var nodeValue = 'one'
            linkedList.add( nodeValue );
            
            expect( linkedList ).to.have.property( 'size' , 1 );
            expect( linkedList ).to.have.property( 'isEmpty' , false );
            expect( linkedList.first().value ).to.equal( nodeValue );
            expect( linkedList.first().next() ).to.equal( null );
            expect( linkedList.last().value ).to.equal( nodeValue );
            expect( linkedList.last().next() ).to.equal( null );
            linkedList.first();  // set value of current()
            expect( linkedList.current().value ).to.equal( nodeValue );
            expect( linkedList.current().next() ).to.equal( null );
            linkedList.first();  // set value of current() for next()
            expect( linkedList.next() ).to.equal( null );
            expect( linkedList.get( nodeValue ).value ).to.equal( nodeValue );
            expect( linkedList.getAt( 0 ).value ).to.equal( nodeValue );
            expect( linkedList.toArray() ).to.eql( [ nodeValue ] );
        });

        it( 'add single item, should be an object with a single list item' , function () {
            expect( linkedList ).to.have.property( 'size' , 0 );
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
